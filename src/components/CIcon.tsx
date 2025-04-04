import { Box, Icon } from "@mui/material";
import { TechEnum } from "../enum/TechEnum";
import { IconBase } from "react-icons";

const icons = {
    Php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" ,
    Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" ,
    Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" ,
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" ,
    Typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" ,
    Javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" ,
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" ,
    Postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" ,
    Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" ,
    Mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" ,
    GraphQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" ,
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" ,
};

const CIcon = (tech: TechEnum) => {
    return (
        <Box component={"img"} src={icons[tech]} borderRadius={50} maxHeight={20}/>
    )
}


export default CIcon;