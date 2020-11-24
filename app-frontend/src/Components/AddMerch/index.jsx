import React, {Component} from 'react'

export default class AddMerch extends Component{

        constructor(props){
            super(props)

            this.state ={
                img: '',
                description: '',
                type: '',
                price:'',
                quantity:''
            }
        }


        addMerch = async (createdMerch) => {
            try{
                const url = process.env.REACT_APP_API_URL + 'create';
                const createMerchResponse = await fetch(url,{
                    credentials: "include",
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(createdMerch)
                })
                console.log('this: ', createMerchResponse)
                const createMerchJson = await createMerchResponse.json()
                if (createMerchResponse.status === 201 || createMerchResponse.status === 200 ){
                    this.props.fetchData()
                }
            } catch(err){
                console.log('Error adding Merch', err)
            }
        }

        handleChange = (event) =>{
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        handleSubmit = (event) =>{
            event.preventDefault()
            this.addMerch(this.state)
            this.setState({
                img: '',
                description: '',
                type: '',
                price:'',
                quantity:''
            })
        }

        test = (e) =>{
            console.log(this.state)
        }

    render(){
        return(
            <div class='add-merch card'>
                <h1> Add Merch</h1>
                <form class='add' onSubmit={this.handleSubmit}>
                        <label>Image Link</label>
                        <input type='text' name = 'img' value={this.state.img} onChange={this.handleChange}/>
                        <label>Description</label>
                        <input type='text' class='description' name='description' value={this.state.description} onChange={this.handleChange}/>
                        <label>Type</label>
                        <input type='text' name='type' value={this.state.type} onChange={this.handleChange}/>
                        <label>Price</label>
                        <input type='number' name='price' value={this.state.price} onChange={this.handleChange}/>
                        <label>Quantity</label>
                        <input type='number' name='quantity' value={this.state.quantity} onChange={this.handleChange}/>

                    <button type='submit' onClick={this.test}>Submit </button>
                </form>

            </div>
        )

    }
    }
