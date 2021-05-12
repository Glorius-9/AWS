import React from 'react'
import NavBar from './NavBar'


const Home = () => (
    <div>
    <NavBar/>
    <div>
        <main className="container mb-3">
            <div className="row">
                <aside id="battleScript" className="col-sm-12 col-md-4 border border-dark">
                <h3 className="font-weight-bold secondFont mt-2 text-center">Informations</h3>
                <p className="font-italic text-center">Dispo</p>
                </aside>
                <section className="col-sm-12 col-md-8 bg-light px-5" id="board">
                    <h3 className="font-weight-bold text-center secondFont mt-2">Contenu</h3><span className="glyphicon glyphicon-user" />
                        <div className="d-flex">
                            <aside id="warriorSide" className="w-50 d-flex flex-column justify-content-start align-items-start">
                            </aside>
                            <aside id="wizardSide" className="w-50 d-flex flex-column justify-content-start align-items-end">
                    </aside>
                    </div>
                </section>
            </div>
        </main>

    </div>
  </div>
)

export default Home