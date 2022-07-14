import Stats from './Stats'

const Statistics = ({good, neutral, bad, all, avg, pos}) => {
 return (
    <table>
    <Stats text="Good" count={good}/>
    <Stats text="Neutral" count={neutral}/>
    <Stats text="Bad" count={bad}/>
    <Stats text="All" count={all}/>
    <Stats text="Average" count={avg}/>
    <Stats text="Positive" count={pos}/>
    </table>
 )
}

export default Statistics