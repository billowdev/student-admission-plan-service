# sapms-service

npx sequelize-cli db:seed --seed database/seeders/course-seed.ts





#### seeder
###### Seed all
npx sequelize-cli db:seed:all
###### Seed undo all
npx sequelize-cli db:seed:undo:all


# routes

## user
<!-- /users/register/ -->
/users/login/
/users/get_one/

-  admin
  
/users/get_all/
/users/create/
/users/update/
/users/delete/

## course
- user & admin
<pre>
/courses/get_one/
/courses/get_all/
/courses/create/
/courses/update/
/courses/delete/
</pre>

## admission plan

- user & admin


<pre>
/admission_plans/get_one/
/admission_plans/get_all/
/admission_plans/create/
/admission_plans/update/
/admission_plans/delete/
</pre>


- npm install swagger-ui-express swagger-jsdoc @types/swagger-ui-express @types/swagger-jsdoc
