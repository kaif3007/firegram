import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

class UploadForm extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            file:null,
            error:null
        }

        this.types=['image/png','image/jpeg']
    }

    changeHandler=(e)=>{
      
        let selected=e.target.files[0]
        
        if(selected && this.types.includes(selected.type))
        {
            this.setState({file:selected})
            this.setState({error:null})
        }
        else
        {
            this.setState({file:null})
            this.setState({error:'Please select an image file (png or jpeg)'})
        }

    }

    render()
    {
        return (
            <form>
                <label>
                    <input type="file" onChange={this.changeHandler} />
                    <span>+</span>
                </label>
                <div className="output">
                    { this.state.error &&  <div className="error">{this.state.error}</div>}
                    { this.state.file &&  <div className="error">{this.state.file.name}</div>}
                    { this.state.file && <ProgressBar file={this.state.file} setFile={()=>this.setState({file:null})}/>}                    

                </div>
            </form>
        )
    }
}


export default UploadForm