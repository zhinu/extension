
Practical cases - Xpath
---
## Cas blablacar 

div class kirk-empty-state
```
//div[contains(@class,'kirk-empty-state')]
```
---
## cas leboncoin.fr

div data-qa-id="adview_contact_container"

a href
1539cb66-17b0-4571-ad7e-baefcee83982
```
//div[@data-qa-id='adview_contact_container']//a[contains(@href,'1539cb66-17b0-4571-ad7e-baefcee83982')]
```
---
### amazon panier

div class contient sc-cart-header
```
//div[contains(@class, 'sc-cart-header')]
```

span class contient sc-product-binding Broché
```
//span[.='Broché']
```

```
//div[contains(@class, 'sc-cart-header')] and //span[.='Broché']
```
---
### Pub Facebook

avekapeti href https://www.facebook.com/avekapeti

```
//strong/span[contains(text(), 'Avekapeti')]
```
```
//a[contains(@href,'https://www.facebook.com/avekapeti')]
```

```
//strong/span[contains(text(), 'Avekapeti')] and //a[contains(@href,'https://www.facebook.com/avekapeti')]
```
