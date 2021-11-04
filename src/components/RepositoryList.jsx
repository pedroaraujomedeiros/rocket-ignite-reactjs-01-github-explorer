import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

//https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: 'unform',
  description:'Form in React',
  link: 'https://www.google.com',
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState([]);

  useEffect(()=> {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))

  },[])

  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul >
        {
          repositories.map(repo => <RepositoryItem key={repo.name} repository={repo}/>)
        }
      </ul>
    </section>
  )
}