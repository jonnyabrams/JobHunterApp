import { useState } from "react";
import styled from "styled-components";

import CreateJobHuntModal from "./CreateJobHuntModal";

const Container = styled.div`
    background: #dfdbdb;
    height: calc(100vh - 3.5rem);
    width: 8rem;
    position: fixed;
    overflow-y: scroll;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
`
const Item = styled.div`
    margin-bottom: 2rem;
`
const AddJobHunt = styled.button`
    margin-bottom: 2rem;
    border-radius: 10px;
    width: 70px;
    color: white;
    background-color: blue;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;};
`

const SideBar = () => {

    const [modalOpened, setModalOpened] = useState(false)
  return (
    <Container>
        <Wrapper>
            <AddJobHunt onClick={()=>setModalOpened(true)}>Add Job Hunt</AddJobHunt>
            <CreateJobHuntModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
            <Item>Filter 2</Item>
            <Item>Filter 3</Item>
        </Wrapper>
    </Container>
  )
}

export default SideBar