import projects from './api.json';
export function getAll(){
    return Promise.resolve(projects);
}

export function getId(id){
    const project = projects.find( item => item.id === id)
    return Promise.resolve(project);
}