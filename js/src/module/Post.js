var React = require('react');

var Photo = React.createClass({
  render: function() {
    return (
      <div className="photo">
        <figure className="photo__figure">
          <img src={this.props.photos} alt="" />
          <figcaption className="photo__caption" dangerouslySetInnerHTML={{__html: this.props.caption}} />
        </figure>
      </div>
    );
  }
});

var Links = React.createClass({
  render: function() {
    return (
      <div className="link">
        <a href={this.props.url} className="link__box">
          <div className="link__meta">
            <span className="link__name">{this.props.title}</span>
            <span className="link__host">{this.props.publisher}</span>
          </div>
        </a>
      </div>
    );
  }
});

var About = React.createClass({
  render: function() {
    return (
      <article id="post_" className="article article--text">
        <h3 className="article__title">About Page</h3>
        <div className="article__content">
          <h4>은수리의 기묘한 모험 <small>에 대하여</small></h4>
          <p>안녕하세요 저는 이은수입니다.<br />29살의 나이로 경기도 광주에 살며 Front-end 관련 일을 하고있습니다.</p>

          <h4>About Me</h4>
          <p>저는 현재 Front-end 업무를 담당하고 있습니다. 주로 사용하는 언어는 역시 <strong>HTML, CSS</strong>이고 부족하지만 <em>Javascript</em>를 활용해서 일을 하고있습니다.</p>
          <p>현재 CSS 설계에 대한 많은 생각들(…아마도 <strong>OOCSS</strong>)을 하고 있으며 업무프로세스에 도움을 줄수있는 많은 툴들도 관심갖고 접목 시키려 노력중입니다.</p>
          <p>그런 의미에서 지금의 <strong>'은수리의기묘한모험'</strong> 텀블러를 만들어 보았습니다.<br />
          처음에 계획한대로 관심있는 분야들을 열심히 수집하고 어떻게 하면 더 효율적으로 가공해서 정보를 전달할지 고민하며 운영하고 있습니다.<br />
          제가 갖고 있는 지식의 한계때문에 아직 부족한 점이 많지만 계속 노력중이며 조금씩 발전해 가고 있습니다.</p>

          <h4>Powered by</h4>
          <ul>
            <li>Tumblr</li>
            <li>Sublime Text</li>
            <li>Sass</li>
            <li>Grunt</li>
            <li>Express</li>
            <li>React</li>
          </ul>
        </div>
      </article>
    );
  }
});

module.exports = {
  photo: Photo,
  links: Links,
  about: About
};