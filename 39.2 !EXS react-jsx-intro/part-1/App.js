const App = () => {
    return (
    <div class="alert alert-info" role="alert">
        <FirstComponent />
		<NamedComponent name="Elenka_San" />
  
    </div>)
}
  
ReactDOM.render(<App />, document.getElementById("root"))