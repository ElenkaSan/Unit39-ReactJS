const App = () => {
    return (
    <div>
        <Tweet name="Elenka_San" username="Ella" message="Happy as always" date="04/05/2022" />
        <Tweet name="Ren" username="Roar" message="Tweet tweet tweet" date="04/06/2022" />
		<Tweet name="Mars" username="Milka" message="Be always happy" date="04/07/2022" />
        <Tweet name="Liam" username="Leka" message="Happy tweet" date="04/07/2022" />
    </div>)
}
  
ReactDOM.render(<App />, document.getElementById("root"))