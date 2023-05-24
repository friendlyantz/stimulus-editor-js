Best way to review - commit-by-commit
```sh
rails g scaffold Article text content:json
rails g stimulus editor
# bootstrap might be proken in `app/javascript/application.js` so I uncommented it
bin/importmap pin @editorjs/editorjs @editorjs/header @editorjs/list @editorjs/paragraph @editorjs/code
```
