/*
 Navicat Premium Data Transfer

 Source Server         : liang
 Source Server Type    : MySQL
 Source Server Version : 50519
 Source Host           : localhost:3306
 Source Schema         : loginabc

 Target Server Type    : MySQL
 Target Server Version : 50519
 File Encoding         : 65001

 Date: 30/05/2021 21:05:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for diagnose_user
-- ----------------------------
DROP TABLE IF EXISTS `diagnose_user`;
CREATE TABLE `diagnose_user`  (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `loginname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `num` int(11) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`uid`) USING BTREE,
  UNIQUE INDEX `ture`(`loginname`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of diagnose_user
-- ----------------------------
INSERT INTO `diagnose_user` VALUES (1, '456', '456', '456', '79@qq.com', '456', -999, 0, 30);
INSERT INTO `diagnose_user` VALUES (2, 'zhang', '123', '张', '123@qq.com', '15877345214', 1, 0, 40);
INSERT INTO `diagnose_user` VALUES (3, '852', '456', '456', '456@qq.com', '15877345214', 0, 0, 45);
INSERT INTO `diagnose_user` VALUES (4, '963', '123', '456', '456@qq.com', '15877345214', 0, 0, 23);
INSERT INTO `diagnose_user` VALUES (5, 'lei', 'lei', 'lei', 'lei@qq.com', '15877345214', 1, 0, 15);
INSERT INTO `diagnose_user` VALUES (6, 'wang', 'wang', 'lei', 'wang@qq.com', '15877345214', 3, 0, 18);

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `uid` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `loginname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `loginpass` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `iphone` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` tinyint(1) NULL DEFAULT NULL,
  `activation` char(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`uid`) USING BTREE,
  UNIQUE INDEX `loginname`(`loginname`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('057F30048EF44095A7A0FB1F79D07B6B', 'qd_lzl', 'lzl123', 'werewrw@qq.com', '12345678045', '2020-07-08 10:54:58', 0, '26DCA32497254F0AB908512CB529B44948F443C25B484372ACAAAE9DF3197964');
INSERT INTO `t_user` VALUES ('1', 'liziliang', '12345678', '2222', '15621431328', '666', 11, 'wu');
INSERT INTO `t_user` VALUES ('216BA4A20CEC4B1C985CE272EEAF8664', 'xd_wxy', 'wxy123', '32432423432@qq.com', '36364789098', '2019-11-18 22:38:23', 0, '1DAC2D8E9EBF41F6B08BDB3227509FFC019BC3A9A4A849EA8DC81C1A9AE41D3D');
INSERT INTO `t_user` VALUES ('2A170FFED48546ABB9ADD359E49AAE79', ' xd_lwg', 'lwg123', '234729837@163.com', '12345678090', '2019-11-18 21:49:25', 0, '5150CE74F3604F059B71CCB4D956D01A850B847DF0544B74999B7CC8BAA479E8');
INSERT INTO `t_user` VALUES ('4B9E26E4497C463B92F7D9B0A54E88D1', 'xa_lzl', 'lzl123', '3452352@qq.com', '15621431342', '2019-11-30 18:39:49', 0, '95C23B70A6FE45EA910C05E5A724DAD363905352ED5A42198B1ACDB6C6181D1F');
INSERT INTO `t_user` VALUES ('8C8EBAD2F4AD4F349C0A4979CA7AE276', 'xd_zjc', 'zjc123', '362836327@qq.com', '12345678909', '2019-11-21 21:26:39', 0, 'ECDD0654E3FD45B881894852A7716F9C5E8BAC7E1A344204917669A919DA5FE7');
INSERT INTO `t_user` VALUES ('9708F55DDF354ED7BE089312027B7030', 'xb_lzl', 'lzl123', '343243243@qq.com', '23456789087', '2019-11-21 23:45:16', 0, '1F659E7707AF431597923AC055CCB880BF97039711A54824A03D2ECDB9D96269');
INSERT INTO `t_user` VALUES ('9E7DB29ECABA4816B4ADABAB297D093B', 'skd_lzl', 'lzl123', '32423445@qq.com', '23456789080', '2020-07-10 16:55:53', 0, '723F6370A5FE4C46B9791106B168C1F0F6D918BFBDBC49C1BECA2B93D533C169');
INSERT INTO `t_user` VALUES ('AF684185AFF64581977214D07145FFC6', 'qw_lzl', 'lzl123', '234233@qq.com', '12345678040', '2019-11-25 18:41:01', 0, 'FF57EC71A4CD4EFDB47CA7AFD2A93EBB87DEFB631ED947369A82185E38F055C5');
INSERT INTO `t_user` VALUES ('C86A1919818847C584C4E0D22774796C', 'xd_lzl', 'lzl123', '15621431328@163.com', '15621436328', '2021-05-30 17:18:48', 0, '2BE61A360DE94EF78375F5E5C9D5E09483E632A878E44D4ABD7CCDDA501BA6AB');

SET FOREIGN_KEY_CHECKS = 1;
