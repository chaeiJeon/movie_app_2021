import React from "react";

class Detail extends React.Component {
  componentDidMount() {
      // render실행되고 자동 실행됨
    const { location, history } = this.props;
    if (location.state === undefined) {
        //"/"로 이동한다
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    //if처리 안해주면 location이 undefined일 때 location.state.title을 찾으려고 해서 오류남
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;