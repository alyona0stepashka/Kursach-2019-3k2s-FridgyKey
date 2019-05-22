using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Interfaces
{
    public interface IService<TEntity,TKey>
    {
        Task<IEnumerable<TEntity>> Get();
        Task<IEnumerable<TEntity>> Get(Func<TEntity, bool> predicate);
        Task<TEntity> Get(TKey id);
        Task<TEntity> Add(TEntity entity);
        Task<TEntity> Update(TEntity entity);
        Task<TEntity> Delete(TEntity entity);
    }
}
