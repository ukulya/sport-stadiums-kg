import Sidebar from "./Sidebar";
import {useEffect, useState} from "react";
import axios from "axios";
import StadiumCard from "./StadiumCard";
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
    const [categories,setCategories] = useState()
    const [areas,setAreas] = useState()

    useEffect( () => {
        getCategories()
        getAreas()

    },[])

    const getCategories = async () => {
        await axios('http://admin.sports.com.kg/api/categories')
            .then(response => {
                setCategories(response.data)
                console.log('categories',response.data)
            })
            .catch(error => console.log('Error fetching data', error))
    }

    const getAreas = async () => {
        await axios('http://admin.sports.com.kg/api/sports_areas')
            .then(response => {
                setAreas(response.data.results)
                console.log('areas',response.data)
                console.log('areas-results',response.data.results)
            })
            .catch(error => console.log('Error fetching data', error))
    }

    //if (!categories || !areas) return 'Loading...'

    return(
        <main>
            <section className='section-hero'>
                <div className="container">
                    <h1>СПОРТИВНЫЕ ПЛОЩАДКИ</h1>
                    <p>Простая и удобная система</p>
                </div>
            </section>
            <section className='section-main'>
                <div className="container">
                    <div className="row">
                        <Sidebar categories={categories} areas={areas} setAreas={setAreas}/>
                        <div className="col-lg-9">
                            <div className="row">
                                {!areas && <div>Loading areas...</div>}
                                {areas &&
                                    <InfiniteScroll
                                        dataLength={areas.length}
                                        next={getAreas}
                                        hasMore={true}
                                        loader={<h4>Loading...</h4>}
                                        endMessage={
                                            <p style={{ textAlign: 'center' }}>
                                                <b>Yay! You have seen it all</b>
                                            </p>
                                        }
                                    >
                                        {areas.map((area,id)=>(
                                            <StadiumCard id={area.id} title={area.title} image={area.image} address={area.address} price={area.price} key={id}/>
                                        ))}
                                    </InfiniteScroll>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Home