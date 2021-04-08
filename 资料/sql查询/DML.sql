CREATE TABLE IF NOT EXISTS users (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30),
	age INT,
	createTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updateTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

# 更新最新修改时间
DR

# 插入数据
INSERT INTO users (name,age) VALUES ('xie',18);

INSERT INTO users VALUES (10,'jones',20,'2021-3-17','2021-3-18');

# 更新数据

UPDATE users SET name='jonesxie',age=20 WHERE id=1;

# 删除数据

DELETE FROM users WHERE id=10;
