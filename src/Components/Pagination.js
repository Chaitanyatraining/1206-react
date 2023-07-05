import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        userData: [],
        pageNumber: 0
    }

    componentDidMount() {
        this.getUserData()
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    getUserData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
            {
                method: 'GET',
                headers: {
                    "app-id": '633e33e98efd49504c9c7643'
                }
            })
        const data = await response.json();
        this.setState({ userData: data.data })
    }

    handleButtonClick = (num) =>{
        this.setState({pageNumber: num})
    }

    componentDidUpdate(prevProps, prevsState){
        if(prevsState.pageNumber !== this.state.pageNumber){
            this.getUserData()
        }
    }

    render() {
        return (
            <div>
                <h2>Pagination</h2>
               <div className='row'>
                {
                    this.state.userData && this.state.userData.length > 0 ? (
                        this.state.userData.map((item)=>(
                            <div className='col-md-6'>
                            <div className='row mt-2 border'>
                                <div className='col-md-2'>
                                    <img src={item.picture} className='img-fluid' />
                                </div>
                                <div className='col-md-10'>
                                    <h4>{item.id}</h4>
                                    <p>{item.title}{item.firstName}{item.lastName}</p>
                                </div>
                            </div>
                        </div>
                        ))
                    ) : '' 
                }
               </div>

               {[1,2,3,4,5,6,7,8,9].map((num)=>(
                <button className='btn btn-primary me-1' 
                onClick={()=>{this.handleButtonClick(num)}}
                >{num}</button>
               ))}
            </div>
        )
    }
}

export default Pagination