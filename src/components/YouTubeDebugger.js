import React from 'react'


export default class YouTubeDebugger extends React.Component{
    
    state= 
    {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      handleBitClick = (e) => {
        //   e.persist()
          this.setState({settings: {...this.state.settings,
            bitrate: 12
            }})
      }

      handleResClick = (e) => {
        // e.persist()
        this.setState({settings: {
            ...this.state.settings, 
            video: {
            ...this.state.video,
            resolution: "720p"
          }}})
    }




      render(){
          return(
            <div>
                <button className= "bitrate" onClick= {this.handleBitClick}>te</button>
                <button className= "resolution" onClick= {this.handleResClick}></button>
            </div>
          )
      }

}