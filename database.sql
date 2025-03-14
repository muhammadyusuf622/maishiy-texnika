-- id bilan olish
CREATE OR REPLACE FUNCTION get_category_ById(cat_id INT) RETURNS users LANGUAGE plpgsql AS $$
BEGIN

RETURN (SELECT 
    c.id, 
    c.name, 
    c.created_at, 
    jsonb_pretty(
        COALESCE(jsonb_agg(
            jsonb_build_object(
                'id', p.id, 
                'name', p.name, 
                'description', p.description, 
                'price', p.price, 
                'count', p.count, 
                'status', p.status, 
                'created_at', p.created_at
            ) 
        ) FILTER (WHERE p.id IS NOT NULL), '[]'::jsonb)
    ) AS products
FROM category c 
LEFT JOIN product p ON c.id = p.category_id 
GROUP BY c.id HAVING c.id = 1)
END;
$$;

SELECT get_category_ById(1);