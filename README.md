Api Endpoints


### get person
```
request: {
personId: 1,
}
response: {
firstName: xxx,
lastName: yyy,
}
```

### create person
```
request: {
firstName: xxx,
lastName: yyy,
}
response: {
res: personId=1 created
}
```
   

### update person
```
request: {
personId: 1,
firstName: xx,
lastName: yy,
}
response: {
res: personId=2 updated
}
```
### delete person
```
request: {
personId: 1
}
response: {
res: personId=1 deleted
```
### create relation
``` 
request: {
personId: [1, 2],
relation: 1,
}
response: {
res: personId=1 related by 1 with personId=2
}
```