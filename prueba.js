class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 0};
  }

  upCount(e){
      e.preventDefault();
    this.setState(function(prevState){
        return{
            temperature: prevState.temperature + 1
        }
    });

  }
  downCount(e){
    e.preventDefault();
    this.setState(function(prevState){
        return{
            temperature: e.prevState.temperature - 1
        }
    });
  }
  restCount(e){
    e.preventDefault();
    this.setState({tremperature: 0});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <input  value="UP"
                type="submit"
                onClick={this.upCount} />
        <input  value="REST"
                type="submit"
                onClick={this.restCount} />
        <input  value="DOWN"
                type="submit"
                onClick={this.downCount} />
      </fieldset>
    );
  }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );