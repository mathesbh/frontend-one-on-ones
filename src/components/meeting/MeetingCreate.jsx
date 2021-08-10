import React, { Fragment, useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { useUsers } from '../hooks/useUsers';
import DateTimePicker from 'react-datetime-picker';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


export default function MeetingCreate() {
  const users = useUsers();

  const [user, setUser] = useState({
    name: '',
    id: '',
  });

  const [stateDate, setStateDate] = useState(new Date());

  const handleLeaderTypes = (type) => type === 'leader' ? 'Líder' : 'Liderado';

  const handleSetUser = (name, id) => {
    return setUser({ name, id });
  };

  const history = useHistory();

  const handleAdd = async () => {
    const date = stateDate
    const { id } = user;
    if (date && id === '') {
      return alert('Todos os campos são obrigatórios!');
    } else if(id === localStorage.getItem('UserCurrent')){
      return alert('Não é possivel agendar com mesmo usuário!');
    }

    try {
      const {status} = await api.post('meetings', { meetWith: id, scheduledTo: date });

      if(status ===201){
        alert('Encontro agendado com sucesso!');
        
        return history.push('/encontroCom');
      }
    } catch (err) {
      const { data } = err.response;
      alert(data.erro);
    }    
  };

return (
  <>
    <Navbar />
    <section className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="box-meeting mx-auto mt-4">
            <div className="list-meeting text-center pt-2">
              <div className="btn-group pt-2">
                <button type="button" className="btn btn-light">Agendar encontro com </button>
                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Menu</span>
                </button>
                <div className="dropdown-menu">
                  {users.map((u) => (
                    <Fragment key={u._id}>
                      <button onClick={(name) => handleSetUser(name.target.innerText, u._id)} className="dropdown-item">{u.name} - {handleLeaderTypes(u.leaderTypes)}</button>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="box-meeting mx-auto mt-4">
            <div className="list-meeting text-center pt-2">
              <div className="btn-group pt-2">
                <h5 className="pt-2">{user.name}</h5>
              </div>
            </div>
          </div>

          <div className="box-meeting mx-auto mt-4">
            <div className="list-meeting text-center pt-2">
              <div className="btn-group pt-3">
                <DateTimePicker
                  onChange={setStateDate}
                  value={stateDate}
                  minDate={new Date()}
                />
              </div>
            </div>
          </div>

          <div className="box-meeting mx-auto mt-4">
            <div className="list-meeting text-center pt-2">
              <div className="btn-group">
                <div className="d-flex justify-content-center pt-2">
                  <button onClick={handleAdd} className='btnAdd'>+</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
)
}