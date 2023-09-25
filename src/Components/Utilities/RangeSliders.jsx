import React, { Component } from 'react'
import { Range, getTrackBackground } from 'react-range';

// const STEP = this.props.step;
const MIN = 0;
const MAX = 100;

export class RangeSliders extends Component {
    state = {
        values: [50]
    };
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    width: "100%"
                }}
            >
                <Range
                    values={this.state.values}
                    step={this.props.steps}
                    min={MIN}
                    max={MAX}
                    onChange={(values) => this.setState({ values })}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: "36px",
                                display: "flex",
                                width: "100%"
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: "8px",
                                    width: "100%",
                                    borderRadius: "4px",
                                    background: getTrackBackground({
                                        values: this.state.values,
                                        colors: ["#548BF4", "#ccc"],
                                        min: MIN,
                                        max: MAX
                                    }),
                                    alignSelf: "center"
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "18px",
                                width: "18px",
                                borderRadius: "100%",
                                backgroundColor: "#FFF",
                                border: "2px solid #548bf4",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 6px #AAA"
                            }}
                        >
                        </div>
                    )}
                />
                <output style={{ marginTop: "30px" }} id="output">
                    {this.state.values[0].toFixed(1)}
                </output>
            </div>
        );
    }
}

export default RangeSliders