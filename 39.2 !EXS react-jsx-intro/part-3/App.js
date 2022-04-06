const App = () => {
    return (
    <div>
        <Person name="Huggies Kaka" age={22} hobbies={[ 'Cry', 'Sleep', 'Eat' ]} />
        <Person name="Kurama Doggy" age={11} hobbies={[ 'Play', 'Sleep', 'Bark' ]} />
        <Person name="BongSoon Happy" age={39} hobbies={[ 'Swimming', 'Yoga', 'Be drunk' ]} />
    </div>)
}
  
ReactDOM.render(<App />, document.getElementById("root"))