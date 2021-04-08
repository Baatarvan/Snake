import "./App.css";

function BorderBox() {
  return <div className="box" />;
}
function BoardRow(props) {
  const { count } = props;

  const getList = () => {
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push(<BorderBox />);
    }
    return list;
  };

  return <div className="row">{getList()}</div>;
}
function Board(props) {
  return (
    <>
      <BoardRow count={props.width} />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Snake</h1>
      <Board width={10} height={10} />
    </div>
  );
}

export default App;
