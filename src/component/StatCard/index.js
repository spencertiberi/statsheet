import React from 'react'
import styled from 'styled-components'
import { ProgressIndicator } from '@fluentui/react'
import { Flex } from '@rebass/grid'
import defaultImage from './defaultImage.png'

const Container = styled(Flex)`
  flex-direction: Column;
  padding: 20px;
  width: 670px;
  background-color: #fbf9f7;
  border-radius: 5px;
  color: #333;
  margin: 0 10px 10px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Bio = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 200px;
  margin-right: 30px;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 0 10px 0;
  border-radius: 200px;
`

const Label = styled(Flex)`
  font-size: 16px;
  width: 200px;
  text-align: left;
`

const Row = styled(Flex)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

const Stats = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const StatContainer = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Text = styled(Flex)`
  font-size: 16px;
  text-align: justify;
`

const Name = styled(Flex)`
  font-size: 30px;
  margin-bottom: 10px;
`

const Bar = styled(ProgressIndicator)`
  width: 200px;
  .progressBar-45 {
    background-color: ${(props) =>
      `rgb(${(1 / props.percentComplete) * 141},${
        props.percentComplete * 253
      }, ${props.percentComplete * 38})`};
    border-radius: 5px;
  }
  .progressTrack-44 {
    border-radius: 5px;
  }
`

const Line = styled(Flex)`
  border-top: solid 5px #edebe9;
  border-radius: 5px;
  height: 0;
  width: 100%;
  margin: 5px 0;
`

const StatLine = ({ stat, level }) => {
  const number = Number.isInteger(level) ? level : 0
  return (
    <StatContainer>
      <Label>{stat}</Label>
      <Bar
        percentComplete={number / 10}
        barHeight={16}
        ariaValueText={number}
      />
    </StatContainer>
  )
}

const StatCard = ({ person }) => (
  <Container>
    <Name>{person.name || 'Error Loading Name'}</Name>
    <Row>
      <Bio>
        <Image src={person.image || defaultImage} />
        <Text>{person.bio}</Text>
      </Bio>
      <Stats>
        {person.stats
          ? Object.entries(person.stats).map((stat, index, arr) => {
              const line = index % 5 === 4 && index < arr.length - 1
              return (
                <>
                  <StatLine stat={stat[0]} level={stat[1]} />
                  {line && <Line />}
                </>
              )
            })
          : 'Error Loading Stats'}
      </Stats>
    </Row>
  </Container>
)

export default StatCard
