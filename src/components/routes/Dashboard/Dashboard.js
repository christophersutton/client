import {React} from 'react'
import plants from './stub_data'
import PlantCard from './PlantCard'
import '../../sass/Dashboard.scss'

export default function Dashboard() {

console.log(plants)

    return (
        <div>
            <h3>Plant Groups</h3>
            <section>Plant groups here</section>

            <h3>All Plants</h3>
            <section className="plants">
            { plants.map( plant => <PlantCard key={plant.id} plant={plant}/>)
                
            }
            </section>
        </div>
    )
}
