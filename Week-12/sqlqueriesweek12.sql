-- Find the item that has minimum weight
select min(weight) as min_weight from items;

-- Find different warehouses in Pune
select w.wid, w.wname, w.location, w.extra_context, c.city, c.state 
from warehouses as w join cities as c where c.cid = w.cid and city = 'Pune';

-- Find the details of items ordered by a customer Mr. Patil
select c.cname, i.itemno, i.description, i.weight, i.cost 
from customer as c 
join orders as o on c.cno=o.cno and cname='Mr. Patil'
join items_orders as i_o on o.ono=i_o.ono
join items as i on i_o.itemno=i.itemno;

-- Find the warehouse which has maximum stores
select max(mycount) from
(select w.wid, w.wname, count(s.sid) as mycount 
from warehouses as w join stores as s 
on w.wid=s.wid group by w.wid) as results;

select w.wid, w.wname, count(s.sid) as mycount 
from warehouses as w join stores as s 
on w.wid=s.wid group by w.wid
order by mycount desc limit 1;

-- Find the item which is ordered for a minimum number of times.
select i.itemno, i.description, count(*) as mycount 
from items as i join items_orders as i_o on i.itemno=i_o.itemno 
group by i.itemno order by mycount limit 1;

-- Find the detailed orders given by each customer
select c.cno, c.cname, o.ono, o.odate, i.itemno, i.description, i.weight, i.cost 
from customer as c join orders as o on c.cno=o.cno
join items_orders as i_o on o.ono=i_o.ono
join items as i on i_o.itemno=i.itemno; ;

