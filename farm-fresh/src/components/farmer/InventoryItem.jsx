import React, {useState} from 'react';
import styled from 'styled-components';

const Div =  styled.div`
padding: 8%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border: 1px solid black;

img {
    width: 5em;
    height: 5em;
}

button {
    width: 70%;
    margin: 1em auto;
    padding: 3%;
    background-color: #1f7a1f;
    color: #f2f2f2;
}
`

const InventoryItem = (props) => {

    const [editing, setEditing] = useState(false);

    const [itemToEdit, setItemToEdit] = useState()

    const deleteProduct = item => {
        props.deleteItem(item.id)
    }

    const handleChange = e => {
        setItemToEdit({
          ...itemToEdit,
          [e.target.name]: e.target.value
        });
       
      };

    const editProduct = color => {
        setEditing(true);
        setItemToEdit(props.item);
        console.log(itemToEdit);
        
    }

    const saveEdit = (e) => {
        props.updateItem(itemToEdit.id, itemToEdit);
        setEditing(true);
    }
    return (
        <Div>
            <img src={props.image} alt={props.name}/>
            <h5>{props.name}</h5>
            <button onClick={e => {
                deleteProduct(props.item)
            }}>Delete</button>
            <button onClick = {() => {
                editProduct(props.item)
            }}>Edit</button>

            {itemToEdit ? <form onSubmit={() => {
                saveEdit()
            }}>
                <input type="text"
                name = 'product_name'
                value={itemToEdit.product_name}
                onChange={handleChange}

                />

                <input type="text"
                name = 'description'
                value={itemToEdit.description}
                onChange={handleChange}
                
                />

                <input type="text"
                name = 'image_url'
                value={itemToEdit.image_url}
                onChange={handleChange}
                
                />

                <input type="number"
                name = 'price'
                value={itemToEdit.price}
                onChange={handleChange}
                
                />

                <input type="text"
                name = 'unit'
                value={itemToEdit.unit}
                onChange={handleChange}
                
                />

                <button>Save</button>
            </form> : ''}

            
        </Div>
    );
}

export default InventoryItem;
