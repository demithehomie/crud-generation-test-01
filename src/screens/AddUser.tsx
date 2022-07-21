//import  * as C from './styles';
import React, { useState } from "react";
import UsersList from './UsersList';

interface IFormState {
    name: string;
    birthday: number;
    turno: string;
    signUpDate: string;
    email: string;
    password: string;
    stayLoggedIn: boolean;
}

const AddUser = ( ) => {

        const [formState, setFormState] = useState<IFormState>();
  
    //formState.

        return (
    <div className="container mt-5">
        <p className="fs-1 mb-5">Sign Up</p>

            <form>

            <div className="mb-3">

                    <label htmlFor="exampleInputName" className="form-label">Nome Completo</label>
                        <input 
                            type="name" 
                            className="form-control" 
                            id="fullname" 
                            name="fullname"
                            required
                        />
            </div>

            <div className="mb-3">

            <label htmlFor="exampleCheckboxGenre" className="form-label">Gênero</label>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">Masculino</label>
            </div>
            
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">Feminino</label> 
            </div>


            </div>


                <div className="mb-3">

                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            name="password"
                            required
                        />
                </div>

                <div className="mb-3">

                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input 
                            type="email"   
                            className="form-control" 
                            id="email" 
                            name="email"
                            required
                        />

            <div id="emailHelp" className="form-text">Nunca compartilharemos seu e-mail com ninguém.</div>
                </div>

                <div className="mb-3">

                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            name="password"
                            required
                        />
                </div>
                
                <div className="mb-3">

                <label htmlFor="exampleInputPassword1" className="form-label">Em que turno você deseja estudar?</label>

                <select className="form-select" aria-label="Default select example">
                    <option selected>Escolha entre Manhã e Tarde</option>
                        <option value="1">Manhã</option>
                        <option value="2">Tarde</option>
  
                </select>

            </div>

            <div className="mb-3">

                <label htmlFor="exampleInputPassword1" className="form-label">Data de Nascimento</label>

            <div className="input-group date" data-provide="datepicker">
    <input type="text" className="form-control"/>
    <div className="input-group-addon">
        <span className="glyphicon glyphicon-th"></span>
    </div>
</div>
</div>


            <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Me mantenha logado</label>
        </div>
            <button type="submit" className="btn btn-primary">Enviar Cadastro</button>
        </form>
        <br/>
        <br/>
        <br/>
        <br/>
        <footer>
            <text>Made with love by Demetrius Carneiro Monteiro Ferreira</text>
        </footer>
    </div> 
        )

}

export default AddUser;