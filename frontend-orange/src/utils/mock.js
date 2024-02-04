import figuraProjeto1 from '../assets/projects/project1.svg'
import figuraProjeto2 from '../assets/projects/project2.svg'
import figuraProjeto3 from '../assets/projects/project3.svg'
import figuraProjeto4 from '../assets/projects/project4.svg'
import profilePicture from '../assets/profile-picture/user-orange.png'




// export const mock = []

export const mock = 
 [
    {
    pais:'Brasil',
    avatar:profilePicture,
    nome:'John Doe',
    email:'john@doeux.com',
    tag:'UI',
    data:'08/23',
    urlImagem:figuraProjeto1,
    tituloProj:'Ecommerce One Page',
    descricao: 'Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.'
  },
  {
    pais:'Alemanha',
    avatar: profilePicture,
    nome:'Joana Doe',
    email:'joana@doeux.com',
    tag:'Web',
    data:'09/23',
    urlImagem:figuraProjeto2,
    tituloProj:'Responsive Website',
    descricao: 'Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.'
  },
  {
    pais:'Brasil',
    avatar: profilePicture,
    nome:'Gil',
    email:'gil@rudge.com',
    tag:'UX',
    data:'10/23',
    urlImagem:figuraProjeto3,
    tituloProj:'Ecommerce One Page',
    descricao: 'Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.'
  },
  {
    pais:'Brasil',
    avatar: profilePicture,
    nome:'Abreu',
    email:'abreu@gmail.com',
    tag:'Back',
    data:'11/23',
    urlImagem:figuraProjeto4,
    tituloProj:'Ecommerce One Page',
    descricao: 'Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.'
  },
  {
    pais:'Brasil',
    avatar: profilePicture,
    nome:'Romualdo',
    email:'ro@gmail.com',
    tag:'Back',
    data:'11/23',
    urlImagem:figuraProjeto4,
    tituloProj:'Ecommerce One Page',
    descricao: 'Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.'
  },
]


export const mockBdResponseAllProjects =
[
  {
      "id": 2,
      "titulo": "Agência de Viagens",
      "descricao": "Aplicação construída com React e MUI",
      "tags": "Frontend",
      "links": "http://localhost:8080/",
      "date": "01/02/2024",
      "image": figuraProjeto1,
      // "image": "https://www.pexels.com/pt-br/foto/foto-de-pessoas-usando-laptop-3194519/",
      "image_id": "d1a13bcb-1c5f-49be-9cd8-229e389e301b",
      "image_originalName": "Captura de Tela (1).png",
      "user": {
          "id": 2,
          "nome": "Maria",
          "sobrenome": "Silva",
          "email": "joao@gmail.com",
          "password": "$2a$10$UpBWvhBVV8SosYDxoOqFMen4FL8RGfzCr51Az.oAf9exob33bMBRW",
          "enabled": true,
          "authorities": [
              {
                  "authority": "ROLE_USER"
              }
          ],
          "username": "joao@gmail.com",
          "accountNonExpired": true,
          "accountNonLocked": true,
          "credentialsNonExpired": true,
          "avatar":profilePicture
      }
  },
  {
      "id": 3,
      "titulo": "orange portfolio",
      "descricao": "aplicação fullstack",
      "tags": "Fullstack",
      "links": "https://localhost:8080/",
      "date": "01/02/2024",
      "image": figuraProjeto2,
      "image_id": "1e4bb354-7042-479b-b68a-3ca03dba69fe",
      "image_originalName": "project2.svg",
      "user": {
          "id": 1,
          "nome": "Fabio",
          "sobrenome": "Coimbra",
          "email": "teste@gmail.com",
          "password": "$2a$10$XaLNXTh4x1FqhUoiJadOFOAQt27chuqrs9T/5NNA1sWyVVR5oydd6",
          "enabled": true,
          "authorities": [
              {
                  "authority": "ROLE_USER"
              }
          ],
          "username": "teste@gmail.com",
          "accountNonExpired": true,
          "accountNonLocked": true,
          "credentialsNonExpired": true,
          "avatar":profilePicture
      }
  },
  {
    "id": 3,
    "titulo": "orange portfolio",
    "descricao": "aplicação fullstack",
    "tags": "React",
    "links": "https://localhost:8080/",
    "date": "01/02/2024",
    "image": figuraProjeto3,
    "image_id": "1e4bb354-7042-479b-b68a-3ca03dba69fe",
    "image_originalName": "project2.svg",
    "user": {
        "id": 1,
        "nome": "Ernesto",
        "sobrenome": "Alcantara",
        "email": "teste@gmail.com",
        "password": "$2a$10$XaLNXTh4x1FqhUoiJadOFOAQt27chuqrs9T/5NNA1sWyVVR5oydd6",
        "enabled": true,
        "authorities": [
            {
                "authority": "ROLE_USER"
            }
        ],
        "username": "teste@gmail.com",
        "accountNonExpired": true,
        "accountNonLocked": true,
        "credentialsNonExpired": true,
        "avatar":profilePicture
    }
},
{
  "id": 3,
  "titulo": "orange portfolio",
  "descricao": "aplicação fullstack",
  "tags": "UI",
  "links": "https://localhost:8080/",
  "date": "01/02/2024",
  "image": figuraProjeto4,
  "image_id": "1e4bb354-7042-479b-b68a-3ca03dba69fe",
  "image_originalName": "project2.svg",
  "user": {
      "id": 1,
      "nome": "Ramon",
      "sobrenome": "Duarte",
      "email": "teste@gmail.com",
      "password": "$2a$10$XaLNXTh4x1FqhUoiJadOFOAQt27chuqrs9T/5NNA1sWyVVR5oydd6",
      "enabled": true,
      "authorities": [
          {
              "authority": "ROLE_USER"
          }
      ],
      "username": "teste@gmail.com",
      "accountNonExpired": true,
      "accountNonLocked": true,
      "credentialsNonExpired": true,
      "avatar":profilePicture
  }
},
{
  "id": 3,
  "titulo": "orange portfolio",
  "descricao": "aplicação fullstack",
  "tags": "Web",
  "links": "https://localhost:8080/",
  "date": "01/02/2024",
  "image": figuraProjeto1,
  "image_id": "1e4bb354-7042-479b-b68a-3ca03dba69fe",
  "image_originalName": "project2.svg",
  "user": {
      "id": 1,
      "nome": "Gertrudes",
      "sobrenome": "Silva",
      "email": "teste@gmail.com",
      "password": "$2a$10$XaLNXTh4x1FqhUoiJadOFOAQt27chuqrs9T/5NNA1sWyVVR5oydd6",
      "enabled": true,
      "authorities": [
          {
              "authority": "ROLE_USER"
          }
      ],
      "username": "teste@gmail.com",
      "accountNonExpired": true,
      "accountNonLocked": true,
      "credentialsNonExpired": true,
      "avatar":profilePicture
  }
}
]