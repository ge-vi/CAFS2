`docker-compose up` - perkuriamas Container is docker-compose.yml

`docker-compose run`

`docker-compose start`
`docker-compose down`

`docker exec -it {{container-name}} 1 /bin/sh` -- tty into {{container-name}}

| Purpose      | Command | Meaning                            |
|--------------|---------|------------------------------------|
| Conception   | build   | **Build** an Image from Dockerfile |
| Birth        | run     | (create + start) a container       |
| Reproduction | commit  | Persist a container to a new image |
|              | run     | Run a new container from an image  |
| Kill         | kill    | Kill a running container           |
| Wake         | start   | Start a stopped container          |
| Death        | rm      | Delete a stopped container         |
| Extinction   | rmi     | Delete a container image           |

