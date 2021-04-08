# 4.1. 查询所有有选课的学生，选择了哪些课程
SELECT
	stu.id id,
	stu.NAME stuName,
	stu.age stuAge,
	cs.id csId,
	cs.NAME csName,
	cs.price csPrice 
FROM
	students stu
	INNER JOIN students_select_courses ssc ON stu.id = ssc.student_id
	JOIN courses cs ON ssc.course_id = cs.id;

# 4.2. 查询所有的学生的选课情况
SELECT
	stu.id id,
	stu.NAME stuName,
	stu.age stuAge,
	cs.id csId,
	cs.NAME csName,
	cs.price csPrice 
FROM
	students stu
	LEFT OUTER JOIN students_select_courses ssc ON stu.id = ssc.student_id
	LEFT JOIN courses cs ON ssc.course_id = cs.id;# 4.3. 哪些学生是没有选课
SELECT
	stu.id id,
	stu.NAME stuName,
	stu.age stuAge,
	cs.id csId,
	cs.NAME csName,
	cs.price csPrice 
FROM
	students stu
	LEFT OUTER JOIN students_select_courses ssc ON stu.id = ssc.student_id
	LEFT JOIN courses cs ON ssc.course_id = cs.id 
WHERE
	cs.id IS NULL;# 4.4. 查询哪些课程是没有被选择的
SELECT
	stu.id id,
	stu.NAME stuName,
	stu.age stuAge,
	cs.id csId,
	cs.NAME csName,
	cs.price csPrice 
FROM
	students stu
	RIGHT OUTER JOIN students_select_courses ssc ON stu.id = ssc.student_id
	RIGHT JOIN courses cs ON ssc.course_id = cs.id 
WHERE
	stu.id IS NULL;# 4.5. 某一个学生选了哪些课程（why）
# 4.查询的需求
# 4.1. 查询所有有选课的学生，选择了哪些课程
SELECT
	stu.id id,
	stu.NAME stuName,
	stu.age stuAge,
	cs.id csId,
	cs.NAME csName,
	cs.price csPrice 
FROM
	`students` stu
	JOIN `students_select_courses` ssc ON stu.id = ssc.student_id
	JOIN `courses` cs ON ssc.course_id = cs.id;# 4.2. 查询所有的学生的选课情况
SELECT
	stu.id id,
	stu.NAME stuName,
	stu.age stuAge,
	cs.id csId,
	cs.NAME csName,
	cs.price csPrice 
FROM
	`students` stu
	LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.student_id;# 4.3. 哪些学生是没有选课
SELECT
	stu.id id,
	stu.NAME stuName,
	stu.age stuAge,
	cs.id csId,
	cs.NAME csName,
	cs.price csPrice 
FROM
	`students` stu
	LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.student_id
	LEFT JOIN `courses` cs ON ssc.course_id = cs.id 
WHERE
	cs.id IS NULL;# 4.4. 查询哪些课程是没有被选择的
SELECT
	stu.id id,
	stu.NAME stuName,
	stu.age stuAge,
	cs.id csId,
	cs.NAME csName,
	cs.price csPrice 
FROM
	`students` stu
	RIGHT JOIN `students_select_courses` ssc ON stu.id = ssc.student_id
	RIGHT JOIN `courses` cs ON ssc.course_id = cs.id 
WHERE
	stu.id IS NULL;;# 4.5. 某一个学生选了哪些课程（why）
SELECT
	stu.id id,
	stu.NAME stuName,
	stu.age stuAge,
	cs.id csId,
	cs.NAME csName,
	cs.price csPrice 
FROM
	`students` stu
	LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.student_id
	LEFT JOIN `courses` cs ON ssc.course_id = cs.id 
WHERE
	stu.id = 2;
	
	
SELECT
	stu.id id,
	stu.NAME stuName,
	stu.age stuAge,
	cs.id csId,
	cs.NAME csName,
	cs.price csPrice 
FROM
	`students` stu
	LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.student_id
	LEFT JOIN `courses` cs ON ssc.course_id = cs.id 
WHERE
	stu.id = 2;