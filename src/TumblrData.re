[@bs.module "query-string"] external stringify: Js.t('a) => string = "";

type post = {
  id: int,
  _type: string,
  summary: string,
  title: option(string),
  publisher: option(string),
  excerpt: option(string),
  url: option(string),
  tags: array(string),
  source_title: option(string),
  source_url: string,
  photos: array(string),
};

type posts = {
  items: array(post),
  total_posts: int,
};

module Decode = {
  let photo = json => {
    Json.Decode.(json |> field("original_size", field("url", string)));
  };

  let post = (json): post =>
    Json.Decode.{
      id: json |> field("id", int),
      _type: json |> field("type", string),
      summary: json |> field("summary", string),
      title: json |> optional(field("title", string)),
      publisher: json |> optional(field("publisher", string)),
      excerpt: json |> optional(field("excerpt", string)),
      url: json |> optional(field("url", string)),
      tags: json |> field("tags", array(string)),
      source_title: json |> optional(field("source_title", string)),
      source_url: json |> field("source_url", string),
      photos: json |> field("photos", array(photo)),
    };

  let posts = (json): posts =>
    Json.Decode.{
      items: json |> field("posts", array(post)),
      total_posts: json |> field("total_posts", int),
    };

  let response = json => Json.Decode.(json |> field("response", posts));
};

let apiBaseUrl = "https://api.tumblr.com/v2/blog/cbcruk.tumblr.com";

let apiKey = "9XQHE6avIyXZBtaiQw8sIG7eNE4Ejzk41cgY2THef9YZr4TuG7";

let tumblrUrl = page => {
  let query =
    stringify({
      "offset": (int_of_string(page) - 1) * Constants.offset,
      "limit": Constants.offset,
      "api_key": apiKey,
    });

  {j|$apiBaseUrl/posts?$query|j};
};

let fetchPosts = (page, callback) => {
  Js.Promise.(
    Fetch.fetch(tumblrUrl(page))
    |> then_(Fetch.Response.json)
    |> then_(json =>
         json
         |> Decode.response
         |> (
           posts => {
             callback(posts);
             resolve();
           }
         )
       )
    |> ignore
  );
};