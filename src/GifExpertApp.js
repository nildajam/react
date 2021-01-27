import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Minions']);

    // const handleAdd = () => {
        // setCategories( [...categories, 'HunterXHunter'] );
        // // Si es al inicio: setCategories( ['HunterXHunter', ...categories] );
        // // o que lo agregue directamente: setCategories( cats => [...cats, 'HunterXHunter'] );
    // }

    return (
        //<div></div> o <></> se puede usar div o vacio como fragment
        <> 
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}
