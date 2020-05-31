import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ProgressIndicator } from '@fluentui/react'
import { Flex } from '@rebass/grid'
import defaultImage from './defaultImage.png'

const Container = styled(Flex)`
  flex-direction: Column;
  padding: 20px;
  width: auto;
  color: inherit;
`

const Bio = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 20vw;
  min-width: 200px;
  margin-right: 30px;
`

const Image = styled.img`
  width: 20vw;
  height: auto;
  min-width: 200px;
  min-height: 200px;
  margin: 0 0 10px 0;
  border-radius: 200px;
`

// const Label = styled(Flex)`
//   font-size: 16px;
//   line-height: 16px;
//   width: 11em;
//   text-align: left;

//   @media only screen and (max-width: 670px) {
//     display: none;
//   }
// `

const Row = styled(Flex)`
  font-size: 16px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
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
  height: 30px;
  margin-bottom: 8px;
`

const Text = styled(Flex)`
  font-size: 16px;
  text-align: justify;
`

// const Name = styled(Flex)`
//   font-size: 30px;
//   margin-bottom: 10px;
//   width: auto;
//   font-weight: bold;
//   letter-spacing: 5px;
// `

const Bar = styled(ProgressIndicator)`
  width: 30vw;
  min-width: 250px;
`
const barStyles = {
  progressBar: {
    backgroundColor: '#6c7557',
  },
  progressTrack: {
    backgroundColor: 'rgb(108,117,87,0.5)',
  },
  itemProgress: {
    padding: 0,
  },
  itemName: {
    fontFamily: 'inherit',
    color: 'inherit',
  },
  root: {
    fontFamily: 'inherit',
    color: 'inherit',
  },
}

const StatLine = ({ stat, level }) => {
  const number = Number.isInteger(level) ? level : 0
  const [value, setValue] = useState(0)

  useEffect(() => setTimeout(() => setValue(number), 500), [number])

  return (
    <StatContainer>
      <Bar
        percentComplete={value / 10}
        barHeight={10}
        ariaValueText={number}
        styles={barStyles}
        label={stat}
      />
    </StatContainer>
  )
}

const StatCard = ({ person }) => (
  <Container>
    <Row>
      <Bio>
        <Image src={person.image || defaultImage} />
        <b>Bio</b>
        <Text>{person.bio}</Text>
      </Bio>
      <Stats>
        {person.stats
          ? Object.entries(person.stats).map((stat, index, arr) => {
              return <StatLine stat={stat[0]} level={stat[1]} />
            })
          : 'Error Loading Stats'}
      </Stats>
    </Row>
  </Container>
)

export default StatCard
