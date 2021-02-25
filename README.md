### Hexlet tests and linter status:
[![Actions Status](https://github.com/gr8arty/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/gr8arty/frontend-project-lvl2/actions) 
[![Maintainability](https://api.codeclimate.com/v1/badges/e33d4ebc94e1ae19261d/maintainability)](https://codeclimate.com/github/gr8arty/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e941519be69b44d056b0/test_coverage)](https://codeclimate.com/github/gr8arty/frontend-project-lvl2/test_coverage)

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

#### Возможности утилиты:

Поддержка разных входных форматов: yaml, json \
Генерация отчета в виде plain text, stylish и json

#### Пример использования:

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

Asciicasts for ```gendiff filepath1.json filepath2.json```  \
[Пример использования](https://asciinema.org/a/4Hp57Jo3Gz4TxKn3wwLNAUpaF)

### Сравнение плоских файлов (Yaml)

Asciicasts for ```gendiff filepath1.yaml filepath2.yaml```  \
[Пример использования](https://asciinema.org/a/v7UAeuKAtWXnphPmPTkqgpHyZ)

