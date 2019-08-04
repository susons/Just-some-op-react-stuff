import React, { Component } from 'react'
import styled from 'styled-components';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import {Card} from './Elements';

const AnimCard = Card.withComponent(animated.div);

const DragCard = AnimCard.extend`
  height: 200px;
  position: absolute;
  width: 200px;
  box-sizing: border-box;
`;

const CardContainer = styled(animated.div)`
  position: relative;
  height: 200px;
  background: #ccc;
  max-width: 200px;
  margin: 0 auto;
  border-radius: 5px;
`;

export default class Drag extends Component {
  onUp = xDelta => () => {
    console.log(xDelta)
    if (xDelta < -300) {
      alert('removeCard')
    } else if (xDelta > 300) {
      alert('except Card')
    }
  }

  render() {
    return (
      <Gesture>
        {({ down, xDelta }) => (
          <Spring
            native
            to={{
              x: down ? xDelta : 0
            }}
            immediate={name => down && name === 'x'}
          >
            {({ x }) => (
              <CardContainer style={
                {
                  background: x.interpolate({
                    range: [-300, 300],
                    output: ['#FF1C68', '#14D790'],
                    extrapolate: 'clamp'
                  })
                }}>
                <DragCard
                onMouseUp={this.onUp(xDelta)}
                  style={{
                    opacity: x.interpolate({
                        range: [-300, -100],
                        output: [0, 1],
                        extrapolate: 'clamp'
                      }),
                    transform: interpolate(
                      [x,
                        x.interpolate({
                        range: [-300, 300],
                        output: [-45, 45],
                        extrapolate: 'clamp'
                      })],
                      (x, rotate) => (
                        `translateX(${x}px) rotate(${rotate}deg)`
                      )
                    )
                  }}
                >
                  <h1>Drag Me</h1>
                </DragCard>
              </CardContainer>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}
