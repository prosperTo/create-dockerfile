# Create Docker File Action

Through this action you can create a docker file in a very sensible way

## Inputs

* **[required] `params`**: Within this parameter what we are going to do is pass all the commands that we need to our docker file, they have to be all together and separated by ';' (semicolon)

## Usage

``` yaml
- name: Create-Dockerfile
  uses: prosperTo/create-dockerfile@main
  with:
    params: 'FROM node:10;WORKDIR /usr/src/app;COPY dist/ ./;COPY package.json .;RUN npm install;EXPOSE 5000;CMD ["node", "index", "--port=5000", "--env=XXXX", "--op=XXXX"]'
```
