import styled from "styled-components"
import { data } from "../dummyData"
import JobHunt from "./JobHunt"
import { JobHuntType } from "../typings"

const Container = styled.div`
margin-left: 8.5rem;
margin-top: 0.5rem;
display: flex;
flex-wrap: wrap;
overflow-y: scroll;
`

const JobHunts = () => {
  return (
    <Container>
        {data.map((jobHunt: JobHuntType) => (<JobHunt key={jobHunt.id} jobHunt={jobHunt}/>))}
    </Container>
  )
}

export default JobHunts