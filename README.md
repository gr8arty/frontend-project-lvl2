### Hexlet tests and linter status:
[![Actions Status](https://github.com/gr8arty/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/gr8arty/frontend-project-lvl2/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/e33d4ebc94e1ae19261d/maintainability)](https://codeclimate.com/github/gr8arty/frontend-project-lvl2/maintainability)


Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

Возможности утилиты:

Поддержка разных входных форматов: yaml, json
Генерация отчета в виде plain text, stylish и json

Пример использования:

```
# формат stylish
$ gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```

### Сравнение плоских файлов (JSON)

Asciicasts gendiff file1.json file2.json : \
[Пример использования] (https://asciinema.org/a/4Hp57Jo3Gz4TxKn3wwLNAUpaF)
