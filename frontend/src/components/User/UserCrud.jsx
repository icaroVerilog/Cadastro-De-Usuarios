import React, {Component} from "react"
import Main from "../templates/Main"
import Axios from "axios"

const HeaderProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

const baseURL = "http://localhost:3001/users"
const initialstate = {
    user: {name: "", email: ""},
    list: []
}

export default class UserCrud extends Component {
    
    state = {...initialstate}

    componentWillMount () {

        Axios(baseURL).then(response => {
            this.setState({list: response.data})
        })

    }
    
    clear() {
        this.setState({  user: initialstate.user  })
    }

    save() {
        const user = this.state.user

        const method = user.id ? "put" : "post"
        const URL = user.id ? `${baseURL}/${user.id}` : baseURL

        Axios[method](URL, user)
            .then(Response => {
                const list = this.getUpdatedList(Response.data)
                this.setState({user: initialstate.user, list})
            })

    }

    getUpdatedList(user, add = true) {

        const list = this.state.list.filter(u => u.id !== user.id)
        
        if (add) {
            list.unshift(user)
        }

        return list

    }

    updateField(event) {

        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user})

    }
    

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={event => this.updateField(event)}
                                placeholder="Digite o nome"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={event => this.updateField(event)}
                                placeholder="Digite o e-mail"/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justfy-content-end">
                        <button className="btn btn-primary" onClick={event => this.save(event)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={event => this.clear(event)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )

    }

    load(user) {

        this.setState({user})

    }

    remove(user) {

        Axios.delete(`${baseURL}/${user.id}`).then(response => {
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })

    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {

        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                                onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {

        return(
            <Main {...HeaderProps }>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}
