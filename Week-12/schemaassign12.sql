create database datawarehouse;

use datawarehouse;
drop table stores;
create table cities(
	cid integer primary key,
    city char(20),
    state char(20)
);

create table warehouses(
	wid integer primary key,
    wname char(30),
    location char(20),
    extra_context json,
    cid integer,
    foreign key(cid) references cities(cid)
);

create table stores(
	sid integer primary key,
    store_name char(20), 
    location_city char(20),
    wid integer,
    foreign key(wid) references warehouses(wid)
);

create table customer(
	cno integer primary key, 
    cname char(50),
    addr varchar(50),
    cu_city char(20)
);

create table orders(
	ono int primary key, 
    odate date,
    cno integer,
    itemno integer,
    foreign key(cno) references customer(cno)
);

create table items(
	itemno integer primary key,
    description text,
    weight decimal(5,2),
    cost decimal(5,2)
);

-- junction table for items and order for many-many relationship
create table items_orders(
	ono int,
    itemno integer,
    foreign key(ono) references orders(ono),
    foreign key(itemno) references items(itemno),
    primary key (ono, itemno)
);

-- junction table for stores and items for many-many relationship
create table stores_items(
	sid integer,
    itemno integer,
    foreign key(sid) references stores(sid),
    foreign key(itemno) references items(itemno),
    primary key (sid, itemno)
);

insert into cities values(1001, 'Hyderabad', 'Telengana');
insert into cities values(1002, 'Bangalore', 'Karnataka');
insert into cities values(1003, 'Pune', 'Maharashtra');
insert into cities values(1004, 'Chennai', 'Tamilnadu');
insert into cities values(1005, 'Mumbai', 'Maharashtra');
insert into cities values(1006, 'Visakhapatnam', 'Andhra Pradesh');

select * from cities;

insert into warehouses values(2001, 'warehouse1', 'Gachibowli', '{"doorno": "1/23"}', 1001);
insert into warehouses values(2002, 'warehouse2', 'Ameerpet', '{"doorno": "3/23"}', 1001);
insert into warehouses values(2003, 'warehouse3', 'Whitefield', '{"doorno": "4/23"}', 1002);
insert into warehouses values(2004, 'warehouse4', 'Koramangala', '{"doorno": "5/23"}', 1002);
insert into warehouses values(2005, 'warehouse5', 'Hinjewadi', '{"doorno": "6/23"}', 1003);
insert into warehouses values(2006, 'warehouse6', 'Talawade', '{"doorno": "7/23"}', 1003);
insert into warehouses values(2007, 'warehouse7', 'Juhu', '{"doorno": "8/23"}', 1005);
insert into warehouses values(2008, 'warehouse8', 'Borivali', '{"doorno": "9/23"}', 1005);

select * from warehouses;
insert into items values(3001, 'Laptop', 1, 700);
insert into items values(3002, 'Mobile', 0.5, 200);
insert into items values(3003, 'Kurta', 2, 100);
insert into items values(3004, 'Kurti', 2, 200);
insert into items values(3005, 'Sofa', 5, 500);

select * from items;

select * from customer;
insert into customer values(4001, 'Mr. Patil', '3-45', 'Pune');
insert into customer values(4002, 'Alpha', '4-45', 'Hyderabad');
insert into customer values(4003, 'Williams', '5-45', 'Bangalore');
insert into customer values(4004, 'Jones', '6-45', 'Chennai');
insert into customer values(4005, 'Smith', '7-45', 'Mumbai');

alter table orders drop column itemno;
select * from orders;
insert into orders values(5001, '2023-01-01', 4001);
insert into orders values(5002, '2023-01-02', 4001);
insert into orders values(5003, '2023-01-03', 4002);
insert into orders values(5004, '2023-01-04', 4003);
insert into orders values(5005, '2023-01-05', 4004);

select * from items_orders;
insert into items_orders values(5001, 3001);
insert into items_orders values(5001, 3002);
insert into items_orders values(5002, 3003);
insert into items_orders values(5002, 3004);
insert into items_orders values(5003, 3005);
insert into items_orders values(5004, 3001);
insert into items_orders values(5005, 3002);

select * from stores;
insert into stores values(6001, 'ShopHouse', 'location1', 2001);
insert into stores values(6002, 'StoreHook', 'location2', 2001);
insert into stores values(6003, 'Thrift', 'location3', 2002);
insert into stores values(6004, 'Minimap', 'location4', 2002);
insert into stores values(6005, 'Offmarket', 'location5', 2003);
insert into stores values(6006, 'FancyMart', 'location6', 2004);
insert into stores values(6007, 'FMart', 'location7', 2001);



