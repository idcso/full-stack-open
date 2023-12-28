const Header = ( {name} ) => <h2>{name}</h2>

const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0)

  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </>

const Course = ( {course} ) =>
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>

export default Course