CREATE TABLE
IF
	NOT EXISTS `comment` (
		id INT PRIMARY KEY AUTO_INCREMENT,
		content VARCHAR ( 1000 ) NOT NULL,
		moment_id INT NOT NULL,
		user_id INT NOT NULL,
		comment_id INT DEFAULT NULL,
		FOREIGN KEY ( moment_id ) REFERENCES moment ( id ) ON DELETE CASCADE ON UPDATE CASCADE,
		FOREIGN KEY ( user_id ) REFERENCES `user` ( id ) ON DELETE CASCADE ON UPDATE CASCADE,
		FOREIGN KEY ( comment_id ) REFERENCES COMMENT ( id ) ON DELETE CASCADE ON UPDATE CASCADE 
	);
IF
	(
		COUNT( c.id ),
		JSON_ARRAYAGG(
		JSON_OBJECT( 'id', c.id, 'commentId', c.comment_id, 'content', c.content )),
	NULL 
	) comments,
SELECT
	m.id,
	m.content,
	m.createAt addTime,
	JSON_OBJECT( 'id', u.id, 'name', u.NAME ) USER,
	JSON_ARRAYAGG(
	JSON_OBJECT( 'id', l.id, 'name', l.NAME )) labels,
	(
	SELECT
	IF
		(
			COUNT( c.id ),
			JSON_ARRAYAGG(
			JSON_OBJECT( 'id', c.id, 'commentId', c.comment_id, 'content', c.content )),
		NULL 
		) 
	FROM
		COMMENT c 
	WHERE
		c.moment_id = m.id 
	) comments 
FROM
	moment m
	LEFT JOIN `user` u ON u.id = m.user_id
	LEFT JOIN moment_label ml ON ml.moment_id = m.id
	LEFT JOIN label l ON ml.label_id = l.id 
WHERE
	m.id = 15;
	
	
	CREATE TABLE IF NOT EXISTS file (
		id INT PRIMARY KEY AUTO_INCREMENT,
		filename VARCHAR(255) ,
		mimetype VARCHAR(255),
		size INT,
		createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	);
	
SELECT
	JSON_OBJECT( 'id', CONCAT('http://localhost:8000/upload/show/',f.filename) ) imgs
FROM
	file f
WHERE
	f.id = 2;