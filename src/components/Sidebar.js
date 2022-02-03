import {Button, Card, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";


const Sidebar = ({categories,setAreas}) => {
    const [types,setTypes] = useState()
    const [infrastructures,setInfrastructures] = useState()

    useEffect( () => {


    },[])

    const getTypes = async (id) => {
        await axios('http://admin.sports.com.kg/api/categories')
            .then(response => {
                setTypes(response.data[id].types)
                console.log('types',response.data[id].types)
            })
            .catch(error => console.log('Error fetching data', error))
    }

    const getInfrastructures = async (id) => {
        await axios('http://admin.sports.com.kg/api/categories')
            .then(response => {
                setTypes(response.data[id].infrastructures)
                console.log('infrastructures',response.data[id].infrastructures)
            })
            .catch(error => console.log('Error fetching data', error))
    }
    
    const handleAreas = (e) => {
      //setAreas(e.target.value)
        getTypes(e.target.value)
        getInfrastructures(e.target.value)
    }

    return(
        <aside className='col-lg-3'>
            {!categories && <div>Loading categories...</div>}
            {categories &&
                <Form.Select defaultValue="Выберите вид спорта" name='areaSelect' onChange={handleAreas} className='mb-4'>
                    <option value='Выберите вид спорта'>Выберите вид спорта</option>
                    {categories.map((category,id)=>(
                        <option value={category.id} key={id}>{category.title}</option>
                    ))}
                </Form.Select>
            }
            <Card className='mb-4'>
                <Card.Body>
                    <Card.Title>Цена</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="from">
                            <Form.Label>От</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="to">
                            <Form.Label>До</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            {types &&
                <Card className='mb-4'>
                    <Card.Body>
                        <Card.Title>Вид поля</Card.Title>
                        <Form>
                            {types.map((type,id) => (
                                <div key={`type-${id}`} className="mb-3">
                                    <Form.Check
                                        type='checkbox'
                                        id={`type-${type.id}`}
                                        label={type.title}
                                    />
                                </div>
                            ))}
                        </Form>
                    </Card.Body>
                </Card>
            }
            {infrastructures &&
                <Card className='mb-4'>
                    <Card.Body>
                        <Card.Title>Инфраструктура</Card.Title>
                        <Form>
                            {infrastructures.map((infrastructure,id) => (
                                <div key={`infrastructure-${id}`} className="mb-3">
                                    <Form.Check
                                        type='checkbox'
                                        id={infrastructure.id}
                                        label={infrastructure.title}
                                    />
                                </div>
                            ))}
                        </Form>
                    </Card.Body>
                </Card>
            }
        </aside>
    )
}
export default Sidebar