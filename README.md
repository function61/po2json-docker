Dockerized version of [po2json](https://github.com/mikeedwards/po2json) that works more like the
Unix philosophy of STDIN -> program -> STDOUT.

.po files are localization files. They have a horrible custom syntax that you probably want to
convert into an interoperable format like JSON so it can easier be processed into your final format.

Overview:

```
$ docker run --rm -i joonas/po2json
Usage: --format=raw|jed|mf [--fuzzy]
```

Run:

```
$ cat example.po | docker run --rm -i joonas/po2json --format=raw
{
   "Hello": [
      null,
      "Ahoy, Matey"
   ],
   "Yes": [
      null,
      "Aye"
   ],
   "Treasure": [
      null,
      "Booty"
   ]
}
```

mf format:

```
$ cat example.po | docker run --rm -i joonas/po2json --format=mf
{
   "Hello": "Ahoy, Matey",
   "Yes": "Aye",
   "Treasure": "Booty"
}
```
