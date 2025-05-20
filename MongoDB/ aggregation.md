# MongoDB Aggregation – Revenue by Store per Month

This query calculates total revenue and average item price per store per month.

## Pipeline Steps

1. `$unwind` items
2. `$addFields` month from `date`
3. `$group` by store and month
4. `$project` clean output
5. `$sort` by store, then month

## Example Document

```json
{
  "date": "2024-06-15T00:00:00Z",
  "store": "Store A",
  "items": [
    { "name": "item1", "quantity": 5, "price": 10 },
    { "name": "item2", "quantity": 3, "price": 20 }
  ]
}
```

## Expected Output

```json
{
  "store": "Store A",
  "month": "2024-06",
  "totalRevenue": 110,
  "averagePrice": 15
}
```

## Aggregation Pipeline

```js
db.sales.aggregate([
  { $unwind: "$items" },

  {
    $addFields: {
      month: { $dateToString: { format: "%Y-%m", date: "$date" } },
    },
  },

  {
    $group: {
      _id: { store: "$store", month: "$month" },
      totalRevenue: {
        $sum: { $multiply: ["$items.quantity", "$items.price"] },
      },
      averagePrice: { $avg: "$items.price" },
    },
  },

  {
    $project: {
      _id: 0,
      store: "$_id.store",
      month: "$_id.month",
      totalRevenue: 1,
      averagePrice: 1,
    },
  },

  {
    $sort: { store: 1, month: 1 },
  },
]);
```
