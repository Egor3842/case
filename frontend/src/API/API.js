import * as axios from 'axios';


export const MainAPI = {
  login(login, password) {
     const body =  {
         "login":login,
         "password":password
     } 
    return axios.post(`http://localhost:9000/authorization`, body)
      .then(response => {   
        return response.data
      })
  },
  takeAllProjects(){
    return axios.get(`http://localhost:9000/projects`)
      .then(response => {
        return response.data
      })
  },
  takeAllWorkers(){
    return axios.get(`http://localhost:9000/workers`)
      .then(response => {
        return response.data
      })
  },
  takeCurrentProject(projectId){
    return axios.get(`http://localhost:9000/projects/${projectId}`)
      .then(response => {
        return response.data
      })
  },
  getProjectTasks(id){
    return axios.get(`http://localhost:9000/projects/${id}/tasks`)
      .then(response => {
        return response.data
      })
  },
  getMyTasks(id){
    return axios.get(`http://localhost:9000/workers/${id}/tasks`)
      .then(response => {
        return response.data
      })
  },
  createTask(data){
    return axios.post(`http://localhost:9000/tasks`, data)
      .then(response => {
        return response.data
      })
  },
  updateTask(id, data){
    return axios.put(`http://localhost:9000/tasks/${id}`, data)
      .then(response => {
        return response.data
      })
  },
  deleteTask(id){
    return axios.delete(`http://localhost:9000/tasks/${id}`)
      .then(response => {
        return response.data
      })
  },
  createProject(data){
    return axios.post(`http://localhost:9000/projects`,data)
      .then(response => {
        return response.data
      })
  },
  workersForProject(id,workers){
    return axios.post(`http://localhost:9000/projects/${id}/workers`,workers)
      .then(response => {
        return response
      })
  },
}
 