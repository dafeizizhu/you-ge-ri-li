### 目录结构

    |---server  
        |---lib
            |---models
                |---index.js
                |---user.js
                |---calendar.js
            |---routers
                |---index.js
                |---static.js
                |---api
                    |---public
                        |---sign-in.js
                        |---sign-up.js
            |---utils
                |---db.js
        |---fixture
            |---index.js
            |---db.sh
        |---test
            |---models
            |---routes
            |---utils
        |---package.json
    |---public
        |---lib
            |---actions
                |---index.js
                |---api
                    |---public
                        |---sign-in.js
                        |---sign-up.js
                |---routes
                    |---sign-in.js
                    |---sign-up.js
                    |---calendar.js
                    |---profile
                        |---calendar
                            |---new.js
                            |---edit.js
            |---reducers
                |---index.js
                |---routes
                    |---index.js
                    |---sign-in.js
                    |---sign-up.js
                    |---calendar.js
                    |---profile
                        |---calendar
                            |---index.js
                            |---new.js
                            |---edit.js
                |---state
                    |---index.js
                    |---user
                        |---index.js
                        |---calendar
                            |---index.js
                            |---event
                                |---index.js
            |---modules
                |---sign-in.js
                |---sign-up.js
                |---calendar.js
            |---components
                |---routes
                    |---sign-in.js
                    |---sign-up.js
                    |---calendar.js
                    |---profile
                        |---calendar
                            |---index.js
                            |---new.js
                            |---edit.js
                |---common
                    |---form.js
                    |---alert.js
                    |---calendar-picker.js
                    |---list.js
                    |---loading.js
        |---assets
            |---images
            |---styles
        |---package.json
        |---webpack.config.js
    |---README.md
