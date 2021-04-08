JSON_OBJECT([key, val[, key, val] ...]) AS brandInfo


SELECT
	products.id AS id,
	products.title AS title,
	products.price AS price,
	products.score AS score,
	JSON_OBJECT( 'id', brand.id, 'name', brand.NAME, 'rank', brand.phoneRank, 'website', brand.website ) AS brand 
FROM
	products
	LEFT JOIN brand ON products.brand_id = brand.id;
	
	
SELECT
	stu.id,
	stu.NAME,
	stu.age,
	JSON_ARRAYAGG(JSON_OBJECT( 'id', cs.id, 'name', cs.NAME )) AS courses 
FROM
	students stu
	LEFT JOIN students_select_courses ssc ON stu.id = ssc.student_id
	LEFT JOIN courses cs ON ssc.course_id = cs.id 
GROUP BY
	stu.id;